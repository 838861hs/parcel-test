import React, { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/ja'; // 日本語ロケールをインポート
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Grow from '@mui/material/Grow';

// dayjsに日本語ロケールを適用
dayjs.locale('ja');
dayjs.extend(customParseFormat);

function App() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select Date"
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={handleClose}
        inputFormat="YYYY/MM/DD" // 入力フォーマットを指定
        mask="____/__/__" // マスクを指定
        views={['year', 'month', 'day']}
        PopperProps={{
          disablePortal: true, // ポータルを無効にしてポップアップの位置を固定
          keepMounted: true, // ポップアップを常にマウント
          transition: true, // トランジションを有効化
        }}
        TransitionComponent={Grow}
        slots={{
          textField: (params) => (
            <TextField
              {...params}
              inputRef={inputRef}
              onFocus={handleFocus} // フォーカス時にカレンダーを開く
              value={selectedDate ? selectedDate.format('YYYY/MM/DD') : ''}
            />
          ),
        }}
      />
    </LocalizationProvider>
  );
}

export default App;
