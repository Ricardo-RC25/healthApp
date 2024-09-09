import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, UIManager, LayoutAnimation, Platform, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

const BloodOxygenScreen = ({ initialSelectedTab = 'Día', initialSelectedDate = new Date(), initialIsDatePickerVisible = false }) => {
  const [selectedTab, setSelectedTab] = useState(initialSelectedTab);
  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(initialIsDatePickerVisible);
  const [data, setData] = useState({ labels: [], datasets: [{ data: [] }] });
  const [summaryData, setSummaryData] = useState({ average: 0, highest: 0, lowest: 0 });
  const [animationValues, setAnimationValues] = useState([]);
  const [isHistoryLogExpanded, setIsHistoryLogExpanded] = useState(false);

  const getData = (tab) => {
    const data = {
      labels: [],
      datasets: [
        {
          data: [],
        },
      ],
    };

    const summaryData = {
      average: 0,
      highest: 0,
      lowest: 0,
    };

    switch (tab) {
      case 'Mes':
        data.labels = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
        data.datasets[0].data = [96, 95, 97, 98]; // Datos de ejemplo para el mes
        summaryData.average = (96 + 95 + 97 + 98) / 4; // Calculo del promedio
        summaryData.highest = Math.max(96, 95, 97, 98); // Calculo de la más alta
        summaryData.lowest = Math.min(96, 95, 97, 98); // Calculo de la más baja
        break;
      case 'Semana':
        data.labels = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
        data.datasets[0].data = [96, 95, 96, 97, 96, 95, 96]; // Datos de ejemplo para la semana
        summaryData.average = (96 + 95 + 96 + 97 + 96 + 95 + 96) / 7; // Calculo del promedio
        summaryData.highest = Math.max(96, 95, 96, 97, 96, 95, 96); // Calculo de la más alta
        summaryData.lowest = Math.min(96, 95, 96, 97, 96, 95, 96); // Calculo de la más baja
        break;
      case 'Día':
        data.labels = ['12PM', '3PM', '6PM', '9PM'];
        data.datasets[0].data = [96, 95, 94, 96, 97, 98, 96, 95]; // Datos de ejemplo para el día
        summaryData.average = data.datasets[0].data.reduce((a, b) => a + b, 0) / data.datasets[0].data.length; // Calculo del promedio
        summaryData.highest = Math.max(...data.datasets[0].data); // Calculo de la más alta
        summaryData.lowest = Math.min(...data.datasets[0].data); // Calculo de la más baja
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

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    if (date <= new Date()) {
      setSelectedDate(date);
      hideDatePicker();
    } else {
      alert('La fecha seleccionada no puede ser futura.');
      hideDatePicker();
    }
  };

  const handleTabChange = (tab) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedTab(tab);
    if (tab !== 'Día') {
      setSelectedDate(new Date());
    }
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
                  backgroundColor: '#4db6ac',
                  position: 'absolute',
                  bottom: 0,
                  left: index * ((Dimensions.get('window').width - 120) / data.datasets[0].data.length),
                }}
              />
            );
          })}
          {/* Horizontal divider lines */}
          {Array.from({ length: 5 }).map((_, i) => (
            <View key={i} style={[styles.horizontalLine, { bottom: i * 44 }]} />
          ))}
          {/* X axis labels */}
          <View style={styles.xAxisLabels}>
            {data.labels.map((label, index) => (
              <Text key={index} style={styles.xAxisLabel}>{label}</Text>
            ))}
          </View>
          {/* Y axis labels */}
          <View style={styles.yAxisLabels}>
            {Array.from({ length: 6 }).map((_, i) => (
              <Text key={i} style={styles.yAxisLabel}>{Math.round((Math.max(...data.datasets[0].data) / 5) * (5 - i))}</Text>
            ))}
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryValue}>{summaryData.average.toFixed(1)}</Text>
          <Text style={styles.summaryLabel}>Promedio</Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Icon name="arrow-up" size={24} color="#e74c3c" style={styles.icon} />
            <Text style={styles.statsValue}>{summaryData.highest.toFixed(1)}</Text>
            <Text style={styles.statsLabel}>Más alta</Text>
          </View>
          <View style={styles.statsBox}>
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
      contentContainerStyle={styles.container} 
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.bloodOxygenContainer}>
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={selectedTab === 'Mes' ? styles.activeTab : styles.tab} onPress={() => handleTabChange('Mes')}>
            <Text style={selectedTab === 'Mes' ? styles.activeTabText : styles.tabText}>Mes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selectedTab === 'Semana' ? styles.activeTab : styles.tab} onPress={() => handleTabChange('Semana')}>
            <Text style={selectedTab === 'Semana' ? styles.activeTabText : styles.tabText}>Semana</Text>
          </TouchableOpacity>
          <View style={styles.tabWithCalendar}>
            <TouchableOpacity style={selectedTab === 'Día' ? styles.activeTab : styles.tab} onPress={() => handleTabChange('Día')}>
              <Text style={selectedTab === 'Día' ? styles.activeTabText : styles.tabText}>Día</Text>
            </TouchableOpacity>
            {selectedTab === 'Día' ? (
              <TouchableOpacity onPress={showDatePicker} style={styles.calendarButton}>
                <Icon name="calendar-outline" size={25} color="#000" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => handleTabChange('Día')}>
                <Text style={styles.todayText}>Hoy</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          maximumDate={new Date()}
        />
        <View style={styles.contentContainer}>
          {renderContent()}
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Medición de Oxígeno en Sangre</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => router.navigate('KnowledgeColumn')}>
        <Icon name="book-outline" size={25} color="#000" />
        <Text style={styles.menuText}>Columna de conocimiento</Text>
        <Icon name="chevron-forward-outline" size={25} color="#000" style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => setIsHistoryLogExpanded(!isHistoryLogExpanded)}>
        <Icon name="document-text-outline" size={25} color="#000" />
        <Text style={styles.menuText}>Registro de la historia</Text>
        <Icon name={isHistoryLogExpanded ? "chevron-up-outline" : "chevron-forward-outline"} size={25} color="#000" style={styles.menuIcon} />
      </TouchableOpacity>
      {isHistoryLogExpanded && (
        <View style={styles.historyContent}>
          <Text>Contenido del registro de la historia...</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexGrow: 1,
  },
  bloodOxygenContainer: {
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
  tabWithCalendar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarButton: {
    marginLeft: 10,
  },
  todayText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#00BFA5',
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  statsBox: {
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
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
  chartStyle: {
    marginVertical: 10,
    borderRadius: 10,
  },
  calendarText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  historyContent: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default BloodOxygenScreen;
