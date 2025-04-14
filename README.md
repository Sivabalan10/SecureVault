# SecureVault - Cybersecurity Simulation Platform

SecureVault is a Flask-based cybersecurity simulation platform designed to detect and prevent DDoS and brute-force style attacks in real-time. It monitors IP requests, automatically blocks malicious traffic, and generates detailed threat reports.

---

## 🚀 Features

- Real-time IP monitoring
- Automatic IP blocking based on request thresholds
- Threat classification (DDoS / Brute Force)
- Audio alert system upon detecting malicious behavior
- Threat report generation in DOCX format
- Daily server activity report
- IP unblock functionality via API
- Admin login for restricted access
- Context-aware logging system
- Video serving endpoint (for training/demo)

---

## ⚙️ Tech Stack

- **Backend:** Flask (Python)
- **Database:** SQLite
- **Frontend:** HTML (Jinja templates)
- **Other Tools:**
  - `playsound` for audio alerts
  - `python-docx` for DOCX report generation
  - `schedule` for daily task automation

---

## 📚 Future Scope

- ✨ Integrate **Context-Aware Alert System using NLP** to intelligently classify threat context and improve incident response.
- Enable Email/Telegram notifications for critical alerts.
- Add a dashboard to visualize logs and block stats.

---

## ⚡ Installation

1. **Clone the Repository:**
```bash
git clone https://github.com/Sivabalan10/SecureVault
cd SecureVault
```

2. **Create and Activate a Virtual Environment:**
```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

3. **Install Dependencies:**
```bash
pip install -r requirements.txt
```

4. **Run the Application:**
```bash
python app.py
```

> Make sure `alert.mp3` and `video.mp4` are placed in the root directory.

---

## 🌐 Endpoints

- `/` – Home (requires login)
- `/login` – Admin Login
- `/log` – POST request for logging IP traffic (auto-detects IP)
- `/unblock/<ip>` – POST to unblock a previously blocked IP
- `/get_logs` – Get list of access logs
- `/get_blocked_ips` – Get list of currently blocked IPs
- `/video.mp4` – Serve a demo video

---

## 📄 Reports

- **Threat Reports:** Generated for each blocked IP, stored in `reports/<ip>_report.docx`
- **Daily Reports:** Generated every day at 23:59 and saved as `reports/daily_report_<date>.docx`

---

## 📈 Logics Used

- IPs sending more than `10` requests/minute are blocked
- Classification:
  - More than 20 logs → DDoS
  - 10–20 logs → Brute Force
- All blocked IPs are stored and retrievable via `/get_blocked_ips`

---

## 🛡️ Security Notes

- Hardcoded credentials (`admin` / `password123`) should be changed before deployment
- Use HTTPS in production
- Schedule periodic backup of `threat_logs.db`

---

## 🙏 Acknowledgements

Thanks to the contributors of the open-source libraries used in this project. This simulation is a learning-oriented platform meant for academic and prototype-level security use-cases.

---



