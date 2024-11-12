import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, UIManager, LayoutAnimation, Platform, Animated, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

const SleepScreen = ({ initialSelectedTab = 'Día' }) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const [selectedTab, setSelectedTab] = useState(initialSelectedTab);
  const [data, setData] = useState({ labels: [], datasets: [{ data: [] }] });
  const [summaryData, setSummaryData] = useState({ average: 0, highest: 0, lowest: 0 });
  const [animationValues, setAnimationValues] = useState([]);
  const [isHistoryLogExpanded, setIsHistoryLogExpanded] = useState(false);

  const getData = (tab) => {
    const data = {
      labels: [],
      datasets: [{ data: [] }],
    };
    const summaryData = { average: 0, highest: 0, lowest: 0 };

    switch (tab) {
      case 'Mes':
        data.labels = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
        data.datasets[0].data = [6, 7, 5, 8];
        summaryData.average = (6 + 7 + 5 + 8) / 4;
        summaryData.highest = Math.max(6, 7, 5, 8);
        summaryData.lowest = Math.min(6, 7, 5, 8);
        break;
      case 'Semana':
        data.labels = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
        data.datasets[0].data = [7, 6, 8, 5, 7, 6, 7];
        summaryData.average = (7 + 6 + 8 + 5 + 7 + 6 + 7) / 7;
        summaryData.highest = Math.max(7, 6, 8, 5, 7, 6, 7);
        summaryData.lowest = Math.min(7, 6, 8, 5, 7, 6, 7);
        break;
      case 'Día':
        data.labels = ['12PM', '3PM', '6PM', '9PM'];
        data.datasets[0].data = [0, 0, 1, 2, 4, 5, 3, 6, 7, 5, 4, 3, 2, 4, 6, 5, 4, 3, 2, 3, 4, 5, 6, 7];
        summaryData.average = data.datasets[0].data.reduce((a, b) => a + b, 0) / data.datasets[0].data.length;
        summaryData.highest = Math.max(...data.datasets[0].data);
        summaryData.lowest = Math.min(...data.datasets[0].data);
        break;
      default:
        break;
    }

    return { data, summaryData };
  };

  useEffect(() => {
    const { data, summaryData } = getData(selectedTab);
    setData(data);
    setSummaryData(summaryData);
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
        <View style={[styles.chartArea, { borderColor: isDarkMode ? '#666666' : '#e0e0e0' }]}>
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
                  backgroundColor: '#ffca28',
                  position: 'absolute',
                  bottom: 0,
                  left: index * ((Dimensions.get('window').width - 120) / data.datasets[0].data.length),
                }}
              />
            );
          })}
          {Array.from({ length: 5 }).map((_, i) => (
            <View key={i} style={[styles.horizontalLine, { bottom: i * 44, backgroundColor: isDarkMode ? '#444' : '#e0e0e0' }]} />
          ))}
          <View style={styles.xAxisLabels}>
            {data.labels.map((label, index) => (
              <Text key={index} style={[styles.xAxisLabel, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{label}</Text>
            ))}
          </View>
          <View style={styles.yAxisLabels}>
            {Array.from({ length: 6 }).map((_, i) => (
              <Text key={i} style={[styles.yAxisLabel, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{Math.round((Math.max(...data.datasets[0].data) / 5) * (5 - i))}</Text>
            ))}
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={[styles.summaryContainer, { backgroundColor: isDarkMode ? '#333333' : '#eaf2f8' }]}>
          <Text style={styles.summaryValue}>{summaryData.average.toFixed(1)}</Text>
          <Text style={styles.summaryLabel}>Promedio</Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={[styles.statsBox, { backgroundColor: isDarkMode ? '#444444' : '#ecf0f1' }]}>
            <Icon name="arrow-up" size={24} color="#e74c3c" style={styles.icon} />
            <Text style={styles.statsValue}>{summaryData.highest.toFixed(1)}</Text>
            <Text style={styles.statsLabel}>Más alta</Text>
          </View>
          <View style={[styles.statsBox, { backgroundColor: isDarkMode ? '#444444' : '#ecf0f1' }]}>
            <Icon name="arrow-down" size={24} color="#2ecc71" style={styles.icon} />
            <Text style={styles.statsValue}>{summaryData.lowest.toFixed(1)}</Text>
            <Text style={styles.statsLabel}>Más baja</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#ffffff' }]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={[styles.sleepContainer, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={selectedTab === 'Mes' ? styles.activeTab : styles.tab} onPress={() => handleTabChange('Mes')}>
            <Text style={selectedTab === 'Mes' ? [styles.activeTabText, { color: isDarkMode ? '#38c0c0' : '#00BFA5' }] : [styles.tabText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Mes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selectedTab === 'Semana' ? styles.activeTab : styles.tab} onPress={() => handleTabChange('Semana')}>
            <Text style={selectedTab === 'Semana' ? [styles.activeTabText, { color: isDarkMode ? '#38c0c0' : '#00BFA5' }] : [styles.tabText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Semana</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selectedTab === 'Día' ? styles.activeTab : styles.tab} onPress={() => handleTabChange('Día')}>
            <Text style={selectedTab === 'Día' ? [styles.activeTabText, { color: isDarkMode ? '#38c0c0' : '#00BFA5' }] : [styles.tabText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Día</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          {renderContent()}
        </View>
      </View>
      <TouchableOpacity style={[styles.menuItem, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]} onPress={() => router.navigate('KnowledgeColumn')}>
      <Icon name="analytics-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} />
      <Text style={[styles.menuText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Análisis del sueño</Text>
        <Icon name="chevron-forward-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.menuItem, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]} onPress={() => setIsHistoryLogExpanded(!isHistoryLogExpanded)}>
        <Icon name="document-text-outline" size={25} color={isDarkMode ? '#ffffff' : '#000000'} />
        <Text style={[styles.menuText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Registro de la historia</Text>
        <Icon name={isHistoryLogExpanded ? "chevron-up-outline" : "chevron-forward-outline"} size={25} color={isDarkMode ? '#ffffff' : '#000000'} style={styles.menuIcon} />
      </TouchableOpacity>
      {isHistoryLogExpanded && (
        <View style={[styles.historyContent, { backgroundColor: isDarkMode ? '#333333' : '#f9f9f9' }]}>
          <Text style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>Contenido del registro de la historia...</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexGrow: 1,
  },
  sleepContainer: {
    alignItems: 'center',
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
    borderBottomColor: '#38c0c0',
    width: 70,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
  },
  activeTabText: {
    fontSize: 16,
    color:'#38c0c0',
  },
  chartContainer: {
    alignItems: 'center',
    width: '100%',
  },
  chartArea: {
    height: 220,
    width: Dimensions.get('window').width - 120,
    borderWidth: 1,
    position: 'relative',
  },
  horizontalLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
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
  },
  divider: {
    height: 1,
    width: '100%',
    marginVertical: 30,
  },
  summaryContainer: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 110,
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  statsBox: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    width: '40%',
    margin: 10,
  },
  statsValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
  },
  statsLabel: {
    fontSize: 16,
    color: '#888888',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  menuIcon: {
    marginLeft: 'auto',
  },
  historyContent: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default SleepScreen;
