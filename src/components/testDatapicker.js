import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ja } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';

// 日本語ロケールを登録
registerLocale('ja', ja);

const SimpleDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const renderCustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled
  }) => (
    <div
      style={{
        margin: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        {"<"}
      </button>
      <span style={{ margin: '0 10px' }}>
        {date.getFullYear()}年 {date.getMonth() + 1}月
      </span>
      <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        {">"}
      </button>
    </div>
  );

  return (
    <div>
      <h2>日付を選択してください</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy/MM/dd"
        placeholderText="日付を選択"
        locale="ja" // 日本語ロケールを設定
        renderCustomHeader={renderCustomHeader} // カスタムヘッダーを使用
      />
    </div>
  );
};

export default SimpleDatePicker;
