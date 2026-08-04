import { useState } from "react";

function Profile() {
  const [user] = useState({
    name: "کاربر Barzanjeh",
    phone: "0912******",
    gold: "12.50 گرم",
    value: "98,125,000 تومان",
    level: "طلایی",
    joinDate: "1405/01/01",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "#fff",
        padding: "25px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "#171717",
            borderRadius: "25px",
            padding: "35px",
            textAlign: "center",
            border: "1px solid #D4AF37",
            boxShadow: "0 0 25px rgba(212,175,55,.2)",
          }}
        >
          <div
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              margin: "auto",
              background: "linear-gradient(135deg,#D4AF37,#F7E7A9)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#111",
              fontSize: "55px",
              fontWeight: "bold",
            }}
          >
            B
          </div>

          <h1 style={{ marginTop: "20px" }}>
            {user.name}
          </h1>

          <p
            style={{
              color: "#D4AF37",
            }}
          >
            {user.level}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <Card
            title="شماره موبایل"
            value={user.phone}
          />

          <Card
            title="موجودی طلا"
            value={user.gold}
          />

          <Card
            title="ارزش دارایی"
            value={user.value}
          />

          <Card
            title="تاریخ عضویت"
            value={user.joinDate}
          />
        </div>

        <div
          style={{
            marginTop: "35px",
            background: "#171717",
            borderRadius: "25px",
            overflow: "hidden",
            border: "1px solid #2b2b2b",
          }}
        >
          <Menu title="ویرایش اطلاعات" />
          <Menu title="امنیت حساب" />
          <Menu title="احراز هویت" />
          <Menu title="اعلان‌ها" />
          <Menu title="پشتیبانی" />
          <Menu title="درباره برنامه" />

          <div
            style={{
              padding: "22px",
              color: "#ff5b5b",
              cursor: "pointer",
            }}
          >
            خروج از حساب
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div
      style={{
        background: "#171717",
        padding: "25px",
        borderRadius: "20px",
        border: "1px solid #2b2b2b",
      }}
    >
      <div
        style={{
          color: "#999",
          marginBottom: "10px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "22px",
          color: "#D4AF37",
          fontWeight: "bold",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function Menu({ title }) {
  return (
    <div
      style={{
        padding: "22px",
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #2b2b2b",
        cursor: "pointer",
      }}
    >
      <span>{title}</span>

      <span
        style={{
          color: "#D4AF37",
        }}
      >
        ›
      </span>
    </div>
  );
}

export default Profile;
