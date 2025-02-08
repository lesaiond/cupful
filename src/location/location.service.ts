import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationService {
  private locations = [
    {
      id: 1,
      imgCafe: 'link-to-cafe-img-1',
      title: 'Cafe 1',
      address: 'Tashkent, Street 1',
      workingTime: '8 AM - 8 PM',
    },
    {
      id: 2,
      imgCafe: 'link-to-cafe-img-2',
      title: 'Cafe 2',
      address: 'Tashkent, Street 2',
      workingTime: '9 AM - 9 PM',
    },
    {
      id: 3,
      imgCafe: 'link-to-cafe-img-3',
      title: 'Cafe 3',
      address: 'Tashkent, Street 3',
      workingTime: '7 AM - 7 PM',
    },
    {
      id: 4,
      imgCafe: 'link-to-cafe-img-4',
      title: 'Cafe 4',
      address: 'Tashkent, Street 4',
      workingTime: '10 AM - 10 PM',
    },
    {
      id: 5,
      imgCafe: 'link-to-cafe-img-5',
      title: 'Cafe 5',
      address: 'Tashkent, Street 5',
      workingTime: '6 AM - 6 PM',
    },
    {
      id: 6,
      imgCafe: 'link-to-cafe-img-6',
      title: 'Cafe 6',
      address: 'Tashkent, Street 6',
      workingTime: '8 AM - 8 PM',
    },
    {
      id: 7,
      imgCafe: 'link-to-cafe-img-7',
      title: 'Cafe 7',
      address: 'Tashkent, Street 7',
      workingTime: '9 AM - 9 PM',
    },
    {
      id: 8,
      imgCafe: 'link-to-cafe-img-8',
      title: 'Cafe 8',
      address: 'Tashkent, Street 8',
      workingTime: '7 AM - 7 PM',
    },
  ];

  getAllLocations() {
    return this.locations;
  }
}
