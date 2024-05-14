import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/ja'; // 日本語ロケールをインポート
import customParseFormat from 'dayjs/plugin/customParseFormat';

// dayjsに日本語ロケールを適用
dayjs.locale('ja');
dayjs.extend(customParseFormat);

function App() {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select Date"
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
        format="YYYY/MM/DD" // 表示フォーマットを指定
        views={['year', 'month', 'day']}
        slots={{ textField: (params) => <TextField {...params} /> }}
      />
    </LocalizationProvider>
  );
}

export default App;
