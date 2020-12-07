import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shu-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  educationsDetails = {
    icon: 'import_contacts',
    title: 'EDUCATION',
    data: [
      {
        name: 'Gyan ganga institute of technology & sciences',
        'start-date': '2013-08-01',
        'end-date': '2017-07-31',
        description:
          'Completed my graduation from  <strong>Gyan ganga institute of technology & sciences </strong> with <strong>7.41</strong> CGPA, in computer science stream.',
        grade: 'Under Graduation',
      },
      {
        name: 'Board of secondary education',
        'start-date': '2012-07-01',
        'end-date': '2013-06-31',
        description:
          'Completed my  Higher Secondary Education from  Board of secondary education, Madhya Pradesh with 69% ',
        grade: 'Higher Secondary Education',
      },
      {
        name: 'Board of secondary education, Madhya Pradesh',
        'start-date': '2010-08-01',
        'end-date': '2011-07-31',
        description:
          'Completed my High School Education from Board of secondary education, Madhya Pradesh with 63%,',
        grade: 'High School Education',
      },
    ],
  };
  experienceDetails = {
    icon: 'work_outline',
    title: 'EXPERIENCE',
    data: [
      {
        name: 'Associate system engineer',
        'start-date': '2018-07-01',
        'end-date': Date.now(),
        description:
          'Worked as frontend web developer while using cutting edge technologies like HTML, CSS JAVASCRIPT, and javascript framework like Angular ',
        grade: 'Frontend developer',
      },
      {
        name: 'Android Intern',
        'start-date': '2017-08-05',
        'end-date': '2017-10-03',
        description:
          'Worked as android intern, At Retinodes software solution, Jabalpur,',
        grade: 'Internship',
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
