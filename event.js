const calendarEl = document.getElementById("calendar");
    const monthLabel = document.getElementById("monthLabel");
    const prevBtn = document.getElementById("prevMonth");
    const nextBtn = document.getElementById("nextMonth");

    const calendar = {
      events: [
        {
          UID: "54025596@parentsquare.com",
          DTSTART: "20251010",
          DTEND: "20251010",
          SUMMARY: "SAT/PSAT Day",
          DESCRIPTION: ""
        },
        {
          UID: "54025245@parentsquare.com",
          DTSTART: "20251017",
          SUMMARY: "Senior Trip Cornell",
          DESCRIPTION: "Cornell Farms Teambuilding Trip: https://ccesuffolk.org/"
        },
        {
          UID: "54025608@parentsquare.com",
          DTSTART: "20251020",
          DTEND: "20251020",
          SUMMARY: "College and Career Week Begins",
          DESCRIPTION: ""
        },
        {
          UID: "54025635@parentsquare.com",
          DTSTART: "20251022",
          DTEND: "20251022",
          SUMMARY: "2pm dismissal",
          DESCRIPTION: ""
        },
        {
          UID: "54025613@parentsquare.com",
          DTSTART: "20251022",
          DTEND: "20251022",
          SUMMARY: "Freshman Night",
          DESCRIPTION: ""
        },
        {
          UID: "54196359@parentsquare.com",
          DTSTART: "20251022T143000",
          DTEND: "20251022T173000",
          SUMMARY: "Parent Teacher Conferences",
          DESCRIPTION: ""
        },
        {
          UID: "54196365@parentsquare.com",
          DTSTART: "20251023T163000",
          DTEND: "20251023T190000",
          SUMMARY: "Parent Teacher Conferences",
          DESCRIPTION: ""
        },
        {
          UID: "54025610@parentsquare.com",
          DTSTART: "20251024",
          DTEND: "20251024",
          SUMMARY: "I Applied Parade",
          DESCRIPTION: ""
        },
        {
          UID: "54078221@parentsquare.com",
          DTSTART: "20251030",
          DTEND: "20251030",
          SUMMARY: "Halloween Movie Night",
          DESCRIPTION: ""
        },
        {
          UID: "54025617@parentsquare.com",
          DTSTART: "20251030",
          DTEND: "20251030",
          SUMMARY: "3pm schedule: Positive School Culture Event",
          DESCRIPTION: ""
        },
        {
          UID: "54145225@parentsquare.com",
          DTSTART: "20251030T080000",
          DTEND: "20251030T100000",
          SUMMARY: "College Fair",
          DESCRIPTION: "- 8am: 12th grade\n- 8:30am: 11th grade\n- 9am: 10th grade"
        },
        {
          UID: "54095608@parentsquare.com",
          DTSTART: "20251102",
          DTEND: "20251102",
          SUMMARY: "TBD Food and Clothing Drive",
          DESCRIPTION: ""
        },
        {
          UID: "54025630@parentsquare.com",
          DTSTART: "20251104",
          DTEND: "20251104",
          SUMMARY: "Election Day: No students; Staff PD",
          DESCRIPTION: ""
        },
        {
          UID: "54025631@parentsquare.com",
          DTSTART: "20251105",
          DTEND: "20251105",
          SUMMARY: "Full School Town Hall 3rd period",
          DESCRIPTION: ""
        },
        {
          UID: "54196341@parentsquare.com",
          DTSTART: "20251107",
          DTEND: "20251107",
          SUMMARY: "Q1 Ends",
          DESCRIPTION: ""
        },
        {
          UID: "54196345@parentsquare.com",
          DTSTART: "20251110",
          DTEND: "20251110",
          SUMMARY: "Q2 Begins",
          DESCRIPTION: ""
        },
        {
          UID: "54025632@parentsquare.com",
          DTSTART: "20251111",
          DTEND: "20251111",
          SUMMARY: "School Closed Veterans Day",
          DESCRIPTION: ""
        },
        {
          UID: "54037541@parentsquare.com",
          DTSTART: "20251112T090000",
          DTEND: "20251112T094500",
          SUMMARY: "Parents: Coffee with Principal",
          DESCRIPTION: ""
        },
        {
          UID: "54025634@parentsquare.com",
          DTSTART: "20251119",
          DTEND: "20251119",
          SUMMARY: "2pm dismissal",
          DESCRIPTION: ""
        },
        {
          UID: "54145363@parentsquare.com",
          DTSTART: "20251120",
          DTEND: "20251120",
          SUMMARY: "NHS Induction (combined)",
          DESCRIPTION: "- combined with Hempstead\n- UHS Auditorium"
        },
        {
          UID: "54025636@parentsquare.com",
          DTSTART: "20251126",
          DTEND: "20251126",
          SUMMARY: "12noon dismissal",
          DESCRIPTION: ""
        },
        {
          UID: "54025638@parentsquare.com",
          DTSTART: "20251127",
          DTEND: "20251127",
          SUMMARY: "School closed Thanksgiving",
          DESCRIPTION: ""
        },
        {
          UID: "54025639@parentsquare.com",
          DTSTART: "20251128",
          DTEND: "20251128",
          SUMMARY: "School closed Thanksgiving",
          DESCRIPTION: ""
        },
        {
          UID: "54025641@parentsquare.com",
          DTSTART: "20251203",
          DTEND: "20251203",
          SUMMARY: "Full School Town Hall 3rd period",
          DESCRIPTION: ""
        },
        {
          UID: "54094633@parentsquare.com",
          DTSTART: "20251207",
          DTEND: "20251207",
          SUMMARY: "TBD Holiday Show this month",
          DESCRIPTION: ""
        },
        {
          UID: "54025648@parentsquare.com",
          DTSTART: "20251208",
          DTEND: "20251208",
          SUMMARY: "Senior Trip Radio City This week",
          DESCRIPTION: ""
        },
        {
          UID: "54025643@parentsquare.com",
          DTSTART: "20251208",
          DTEND: "20251208",
          SUMMARY: "Mock Regents Week Begins",
          DESCRIPTION: ""
        },
        {
          UID: "54025780@parentsquare.com",
          DTSTART: "20251218",
          DTEND: "20251218",
          SUMMARY: "3pm schedule: Positive School Culture Event",
          DESCRIPTION: ""
        },
        {
          UID: "54025647@parentsquare.com",
          DTSTART: "20251223",
          DTEND: "20260103",
          SUMMARY: "School closed 12/23 - 12/2 Holiday Recess",
          DESCRIPTION: ""
        },
        {
          UID: "54025647@parentsquare.com",
          DTSTART: "20260114",
          DTEND: "20260114",
          SUMMARY: "2pm dismissal",
          DESCRIPTION: ""
        },
        {
          UID: "54025647@parentsquare.com",
          DTSTART: "20260119",
          DTEND: "20260119",
          SUMMARY: "School closed MLK Jr. Day",
          DESCRIPTION: ""
        },
        {
          UID: "54025647@parentsquare.com",
          DTSTART: "20260204",
          DTEND: "20260204",
          SUMMARY: "2pm dismissal",
          DESCRIPTION: ""
        },
        {
          UID: "54025647@parentsquare.com",
          DTSTART: "20260216",
          DTEND: "20260220",
          SUMMARY: "School closed - Winter Break",
          DESCRIPTION: ""
        },
        {
          UID: "54025647@parentsquare.com",
          DTSTART: "20260318",
          DTEND: "20260318",
          SUMMARY: "2pm dismissal",
          DESCRIPTION: ""
        },
        {
          UID: "54025647@parentsquare.com",
          DTSTART: "20260403",
          DTEND: "20260410",
          SUMMARY: "School closed - Spring Break",
          DESCRIPTION: ""
        },
        {
          UID: "54025647@parentsquare.com",
          DTSTART: "20260429",
          DTEND: "20260429",
          SUMMARY: "2pm dismissal",
          DESCRIPTION: ""
        },
        {
          UID: "54025647@parentsquare.com",
          DTSTART: "20260525",
          DTEND: "20260525",
          SUMMARY: "School closed - Memorial Day",
          DESCRIPTION: ""
        },
        {
          UID: "54025647@parentsquare.com",
          DTSTART: "20260610",
          DTEND: "20260610",
          SUMMARY: "2pm dismissal",
          DESCRIPTION: ""
        },
        {
          UID: "54025647@parentsquare.com",
          DTSTART: "20260619",
          DTEND: "20260619",
          SUMMARY: "School closed - Juneteenth",
          DESCRIPTION: ""
        },
        {
          UID: "54025647@parentsquare.com",
          DTSTART: "20260626",
          DTEND: "20260626",
          SUMMARY: "Last Day of School",
          DESCRIPTION: ""
        },
      ]
    };
    
    let currentDate = new Date()
    let currentMonth = currentDate.getMonth()
    let currentYear = currentDate.getFullYear()

    const weekdayHeaderEl = document.getElementById("weekdayHeader");

function renderWeekdayHeader() {
  const labels = ["s", "m", "t", "w", "h", "f", "s"]; // 'h' for Thursday to keep width even
  weekdayHeaderEl.innerHTML = "";
  labels.forEach(label => {
    const cell = document.createElement("div");
    cell.textContent = label;
    weekdayHeaderEl.appendChild(cell);
  });
}

// Call it once on page load
renderWeekdayHeader();

    function renderCalendar(events, year, month) {
      calendarEl.innerHTML = "";
    
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const startDayOfWeek = firstDay.getDay();
      const daysInMonth = lastDay.getDate();
    
      const monthName = firstDay.toLocaleString("default", { month: "long" });
      monthLabel.textContent = `${monthName} ${year}`;
    
      // Empty cells before first day
      for (let i = 0; i < startDayOfWeek; i++) {
        const empty = document.createElement("div");
        calendarEl.appendChild(empty);
      }
    
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dateStr = date.toISOString().slice(0, 10).replace(/-/g, "");
    
        const dayEl = document.createElement("div");
        dayEl.className = "day";
    
        const numberEl = document.createElement("div");
        numberEl.className = "day-number";
        numberEl.textContent = day;
        dayEl.appendChild(numberEl);
    
        const dayEvents = (events || []).filter(ev => {
          if (!ev.DTSTART) return false;
    
          const start = ev.DTSTART.replace(/[-\s]/g, "");
          const end = ev.DTEND ? ev.DTEND.replace(/[-\s]/g, "") : start;
    
          // Handle multi-day span
          return dateStr >= start && dateStr <= end;
        });
    
        for (let ev of dayEvents) {
          const evEl = document.createElement("div");
          evEl.className = "event";
          evEl.textContent = ev.SUMMARY;
          evEl.title = ev.DESCRIPTION || "";
    
          // 🎨 Color coding by SUMMARY keywords
          const summary = ev.SUMMARY.toLowerCase();
          if (summary.includes("dismissal") || summary.includes("12noon") || summary.includes("2pm")) {
            evEl.style.backgroundColor = "green";
          } else if (summary.includes("school closed")) {
            evEl.style.backgroundColor = "orange";
          } else if (summary.includes("town hall")) {
            evEl.style.backgroundColor = "purple";
          } else {
            evEl.style.backgroundColor = "#007bff"; // default blue
          }
    
          dayEl.appendChild(evEl);
        }
    
        calendarEl.appendChild(dayEl);
      }
    }

    prevBtn.addEventListener("click", () => {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendar(calendar?.events, currentYear, currentMonth);
    });

    nextBtn.addEventListener("click", () => {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendar(calendar?.events, currentYear, currentMonth);
    });

    renderCalendar(calendar?.events, 2025, 9);