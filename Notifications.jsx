function Notifications() {

  const notifications = [
    {
      id: 1,
      title: "افزایش قیمت طلا",
      text: "قیمت هر گرم طلا ۱۸ عیار ۱.۲٪ افزایش یافت.",
      time: "۵ دقیقه پیش",
    },
    {
      id: 2,
      title: "ثبت خرید",
      text: "خرید ۲ گرم طلا با موفقیت انجام شد.",
      time: "۱ ساعت پیش",
    },
    {
      id: 3,
      title: "خبر بازار",
      text: "بازار جهانی طلا امروز با رشد آغاز شد.",
      time: "دیروز",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#090909",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#D4AF37",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        اعلان‌ها
      </h1>

      {notifications.map((item) => (
        <div
          key={item.id}
          style={{
            background: "#171717",
            border: "1px solid #2b2b2b",
            borderRadius: "18px",
            padding: "18px",
            marginBottom: "15px",
          }}
        >
          <h3
            style={{
              color: "#D4AF37",
              marginBottom: "10px",
            }}
          >
            {item.title}
          </h3>

          <p
            style={{
              color: "#ddd",
              marginBottom: "10px",
            }}
          >
            {item.text}
          </p>

          <small
            style={{
              color: "#888",
            }}
          >
            {item.time}
          </small>
        </div>
      ))}
    </div>
  );
}

export default Notifications;
