import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    partyAName: '',
    partyAAddress: '',
    partyAEmail: '',
    partyAPhone: '',
    partyBName: '',
    partyBAddress: '',
    partyBEmail: '',
    partyBPhone: '',
    startDate: '',
    duration: '',
    fee: '',
    arbitrationLocation: '',
    daysBeforeCancellation: '',
    cancellationCompensation: '',
    artistSignature: '',
    organizerSignature: '',
    agreementChecked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // من هنا يمكنك تنفيذ منطق إرسال البيانات للعقد الذكي أو لأي سيرفر آخر
    console.log(formData);
  };

  return (
    <div className="App">
      <h1>اتفاقية تقديم خدمات فنية</h1>
      <h2>عقد رسمي</h2>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>الخطوة 1: تفاصيل الطرفين</legend>
          <div>
            <label>الطرف الأول (المنظم):</label>
            <input type="text" name="partyAName" placeholder="اسم الشركة أو الشخص" value={formData.partyAName} onChange={handleChange} required />
            <input type="text" name="partyAAddress" placeholder="العنوان" value={formData.partyAAddress} onChange={handleChange} required />
            <input type="email" name="partyAEmail" placeholder="البريد الإلكتروني" value={formData.partyAEmail} onChange={handleChange} required />
            <input type="text" name="partyAPhone" placeholder="رقم الهاتف" value={formData.partyAPhone} onChange={handleChange} required />
          </div>
          <div>
            <label>الطرف الثاني (الفنان):</label>
            <input type="text" name="partyBName" placeholder="اسم الفنان" value={formData.partyBName} onChange={handleChange} required />
            <input type="text" name="partyBAddress" placeholder="العنوان" value={formData.partyBAddress} onChange={handleChange} required />
            <input type="email" name="partyBEmail" placeholder="البريد الإلكتروني" value={formData.partyBEmail} onChange={handleChange} required />
            <input type="text" name="partyBPhone" placeholder="رقم الهاتف" value={formData.partyBPhone} onChange={handleChange} required />
          </div>
        </fieldset>

        <fieldset>
          <legend>الخطوة 2: مدة العقد</legend>
          <label>العقد يبدأ في:</label>
          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
          <label>مدة العقد:</label>
          <input type="text" name="duration" placeholder="اكتب مدة العقد هنا" value={formData.duration} onChange={handleChange} required />
        </fieldset>

        <fieldset>
          <legend>الخطوة 3: الشروط والأحكام</legend>
          <div>
            <label>1. مقابل الأتعاب</label>
            <input type="text" name="fee" placeholder="اكتب الأجر المتفق عليه هنا" value={formData.fee} onChange={handleChange} required />
          </div>
          <div>
            <label>3. إلغاء أو تأجيل الحفلات</label>
            <p>في حال <strong>إلغاء الحفل</strong> قبل 
              <input type="text" name="daysBeforeCancellation" placeholder="عدد الأيام" value={formData.daysBeforeCancellation} onChange={handleChange} required />
              من قبل المنظم، يستحق الفنان تعويض قدره 
              <input type="text" name="cancellationCompensation" placeholder="قيمة التعويض" value={formData.cancellationCompensation} onChange={handleChange} required />.
            </p>
          </div>
          <div>
            <label>5. النزاعات القانونية</label>
            <p>في حال وجود نزاع، يتم حله عبر التحكيم في 
              <input type="text" name="arbitrationLocation" placeholder="مكان التحكيم" value={formData.arbitrationLocation} onChange={handleChange} required />.
            </p>
          </div>
        </fieldset>

        <fieldset>
          <legend>الخطوة 4: الموافقة النهائية والتوقيع</legend>
          <div>
            <input type="checkbox" name="agreementChecked" checked={formData.agreementChecked} onChange={handleChange} required />
            <label>أوافق على الشروط والأحكام المذكورة في هذا العقد.</label>
          </div>
          <div>
            <label>التوقيع الإلكتروني:</label>
            <input type="text" name="artistSignature" placeholder="اسم الفنان" value={formData.artistSignature} onChange={handleChange} required />
            <button type="button">التوقيع الإلكتروني للفنان</button>
            <input type="text" name="organizerSignature" placeholder="اسم المنظم" value={formData.organizerSignature} onChange={handleChange} required />
            <button type="button">التوقيع الإلكتروني للمنظم</button>
          </div>
        </fieldset>

        <button type="submit">إرسال العقد</button>
      </form>
    </div>
  );
}

export default App;
