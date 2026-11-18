// عنوان القسم: كلمة صغيرة حمرا + عنوان كبير + زرار View All (اختياري).
// الـ props: label و title و showButton
function SectionHeading({ label, title, showButton = true }) {
  return (
    <div className={showButton ? 'section-heading' : 'section-heading center'}>
      <div>
        <h6>{label}</h6>
        <h2>{title}</h2>
      </div>
      {showButton && (
        <a href="#" className="main-button">
          View All
        </a>
      )}
    </div>
  )
}

export default SectionHeading
