import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Homestay Booking</h1>
        <nav>
          <a href="#">Trang chủ</a>
          <a href="#">Phòng</a>
          <a href="#">Liên hệ</a>
        </nav>
      </header>

      <section className="banner">
        <h2>Chào mừng bạn đến với Homestay</h2>
        <p>Đặt phòng nhanh chóng - Giá tốt nhất</p>
        <button>Đặt ngay</button>
      </section>

      <section className="rooms">
        <h2>Danh sách phòng</h2>

        <div className="room-card">
          <img src="https://via.placeholder.com/200" />
          <h3>Phòng Deluxe</h3>
          <p>Giá: 500.000đ/đêm</p>
        </div>

        <div className="room-card">
          <img src="https://via.placeholder.com/200" />
          <h3>Phòng VIP</h3>
          <p>Giá: 1.000.000đ/đêm</p>
        </div>
      </section>

      <footer>
        <p>© 2026 Homestay Booking</p>
      </footer>
    </div>
  )
}

export default App