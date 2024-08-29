import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, UIManager, LayoutAnimation, Platform, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

const StepsScreen = ({ initialSelectedTab = 'Día' }) => {
  const [selectedTab, setSelectedTab] = useState(initialSelectedTab);
  const [data, setData] = useState({ labels: [], datasets: [{ data: [] }] });
  const [animationValues, setAnimationValues] = useState([]);

  const getData = (tab) => {
    const data = {
      labels: [],
      datasets: [
        {
          data: [],
        },
      ],
    };

    switch (tab) {
      case 'Mes':
        data.labels = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
        data.datasets[0].data = [6000, 7000, 5000, 8000]; // Datos de ejemplo para el mes
        break;
      case 'Semana':
        data.labels = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
        data.datasets[0].data = [7000, 6000, 8000, 5000, 7000, 6000, 7000]; // Datos de ejemplo para la semana
        break;
      case 'Día':
        data.labels = ['12AM', '3AM', '6AM', '9AM', '12PM', '3PM', '6PM', '9PM'];
        data.datasets[0].data = [0, 0, 1000, 2000, 3000, 4000, 3000, 2000]; // Datos de ejemplo para el día
        break;
      default:
        break;
    }

    return data;
  };

  useEffect(() => {
    const data = getData(selectedTab);
    setData(data);
    const values = data.datasets[0].data.map(() => new Animated.Value(0));
    setAnimationValues(values);
    animateChart(values);
  }, [selectedTab]);

  const animateChart = (values) => {
    const animations = values.map(value => {
      return Animated.timing(value, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      });
    });
    Animated.stagger(100, animations).start();
  };

  const handleTabChange = (tab) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedTab(tab);
  };

  const renderContent = () => {
    return (
      <View style={styles.chartContainer}>
        <View style={styles.chartArea}>
          {data.datasets[0].data.map((value, index) => {
            const animatedHeight = animationValues[index].interpolate({
              inputRange: [0, 1],
              outputRange: [0, value * 220 / Math.max(...data.datasets[0].data)],
            });

            return (
              <Animated.View
                key={index}
                style={{
                  height: animatedHeight,
                  width: (Dimensions.get('window').width - 100) / data.datasets[0].data.length - 10,
                  backgroundColor: '#3d0890',
                  position: 'absolute',
                  bottom: 0,
                  left: index * ((Dimensions.get('window').width - 120) / data.datasets[0].data.length),
                  borderRadius: 10,
                }}
              />
            );
          })}
          {Array.from({ length: 5 }).map((_, i) => (
            <View key={i} style={[styles.horizontalLine, { bottom: i * 44 }]} />
          ))}
          <View style={styles.xAxisLabels}>
            {data.labels.map((label, index) => (
              <Text key={index} style={styles.xAxisLabel}>{label}</Text>
            ))}
          </View>
          <View style={styles.yAxisLabels}>
            {Array.from({ length: 6 }).map((_, i) => (
              <Text key={i} style={styles.yAxisLabel}>{Math.round((Math.max(...data.datasets[0].data) / 5) * (5 - i))}</Text>
            ))}
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryValue}>{data.datasets[0].data.reduce((a, b) => a + b, 0)}</Text>
          <Text style={styles.summaryLabel}>Pasos totales</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.stepsContainer}>
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={selectedTab === 'Mes' ? styles.activeTab : styles.tab} onPress={() => handleTabChange('Mes')}>
            <Text style={selectedTab === 'Mes' ? styles.activeTabText : styles.tabText}>Mes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selectedTab === 'Semana' ? styles.activeTab : styles.tab} onPress={() => handleTabChange('Semana')}>
            <Text style={selectedTab === 'Semana' ? styles.activeTabText : styles.tabText}>Semana</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selectedTab === 'Día' ? styles.activeTab : styles.tab} onPress={() => handleTabChange('Día')}>
            <Text style={selectedTab === 'Día' ? styles.activeTabText : styles.tabText}>Día</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          {renderContent()}
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Medición de Pasos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => router.navigate('StepsAnalysis')}>
        <Icon name="analytics-outline" size={25} color="#000" />
        <Text style={styles.menuText}>Análisis de Pasos</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => router.navigate('HealthSettings')}>
        <Icon name="settings-outline" size={25} color="#000" />
        <Text style={styles.menuText}>Configuraciones de salud</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => router.navigate('KnowledgeColumn')}>
        <Icon name="book-outline" size={25} color="#000" />
        <Text style={styles.menuText}>Columna de conocimiento</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => router.navigate('HistoryLog')}>
        <Icon name="document-text-outline" size={25} color="#000" />
        <Text style={styles.menuText}>Registro de la historia</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.menuIcon} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexGrow: 1,
  },
  stepsContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#00BFA5',
    width: 70,
    alignItems: 'center',
  },
  tabText: {
    color: '#000',
    fontSize: 16,
  },
  activeTabText: {
    color: '#00BFA5',
    fontSize: 16,
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: 5,
    width: '100%',
  },
  chartContainer: {
    alignItems: 'center',
    width: '100%',
  },
  chartArea: {
    height: 220,
    width: Dimensions.get('window').width - 120,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    position: 'relative',
  },
  horizontalLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  xAxisLabels: {
    position: 'absolute',
    bottom: -20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  xAxisLabel: {
    fontSize: 12,
    color: '#000',
  },
  yAxisLabels: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    justifyContent: 'space-between',
    left: -30,
  },
  yAxisLabel: {
    fontSize: 12,
    color: '#000',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    width: '100%',
    marginVertical: 30,
  },
  summaryContainer: {
    alignItems: 'center',
    backgroundColor: '#eaf2f8',
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  summaryValue: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#3498db',
  },
  summaryLabel: {
    fontSize: 16,
    color: '#888888',
  },
  button: {
    backgroundColor: '#17a2b8',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 10,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  menuIcon: {
    marginLeft: 'auto',
  },
});

export default StepsScreen;
