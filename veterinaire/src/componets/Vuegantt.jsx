import { useState } from 'react';
import './Vuegantt.css';

export default function Vuegantt() {
  const days = [
    { short: 'lun 20', full: 'Lundi 20' },
    { short: 'mar 21', full: 'Mardi 21' },
    { short: 'mer 22', full: 'Mercredi 22' },
    { short: 'jeu 23', full: 'Jeudi 23' },
    { short: 'ven 24', full: 'Vendredi 24' },
    { short: 'sam 25', full: 'Samedi 25' },
    { short: 'dim 26', full: 'Dimanche 26' }
  ];

  const appointments = [
    {
      id: 1,
      doctor: 'Dr. Dupont',
      type: 'Consultation',
      location: 'Étoile',
      startDay: 1,
      duration: 2,
      time: '9:00 - 10:30'
    },
    {
      id: 2,
      doctor: 'Dr. Martin',
      type: 'Vaccination',
      location: 'Orage',
      startDay: 4,
      duration: 2,
      time: '10:00 - 11:00'
    }
  ];

  const [selectedAppointment, setSelectedAppointment] = useState(null);

  return (
    <div className="schedule-wrapper">
      <div className="schedule-container">
        <h2>planning des rendez-vous</h2>
        
        <div className="calendar">
          <div className="days-header">
            {days.map((day, index) => (
              <div key={index} className="day">
                <span>{day.short}</span>
              </div>
            ))}
          </div>
          
          <div className="appointments">
            {['Dr. Dupont', 'Dr. Martin'].map((doctor) => (
              <div key={doctor} className="doctor-row">
                <div className="doctor-name">{doctor}</div>
                <div className="timeline">
                  {appointments
                    .filter(apt => apt.doctor === doctor)
                    .map(appointment => (
                      <button
                        key={appointment.id}
                        className={`appointment ${selectedAppointment?.id === appointment.id ? 'selected' : ''}`}
                        style={{
                          left: `${(appointment.startDay - 1) * (100 / 7)}%`,
                          width: `${(appointment.duration * (100 / 7))}%`
                        }}
                        onClick={() => setSelectedAppointment(appointment)}
                        onMouseLeave={() => setSelectedAppointment(null)}
                      >
                        <div className="appointment-content">
                          <div className="appointment-title">
                            {appointment.type} - {appointment.location}
                          </div>
                          <div className="appointment-time">{appointment.time}</div>
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

