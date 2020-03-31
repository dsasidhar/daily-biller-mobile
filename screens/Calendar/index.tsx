import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarScreen() {
  const [selectedDay, setSelectedDay] = useState<any>("");
  const [markedDates, setMarkedDates] = useState<any>({});
  useEffect(() => {
    if (selectedDay) {
      setMarkedDates({
        [selectedDay]: { selected: true }
      });
    }
  }, [selectedDay]);
  return (
    <View style={{ flex: 1 }}>
      <Calendar
        markedDates={markedDates}
        hideExtraDays={true}
        onDayPress={day => setSelectedDay(day.dateString)}
        onMonthChange={month => setSelectedDay("")}
      />
      {!!selectedDay && (
        <View>
          <Text>
            Selected Date: {moment(selectedDay, "YYYY-MM-DD").format("Do MMMM")}
          </Text>
        </View>
      )}
    </View>
  );
}
