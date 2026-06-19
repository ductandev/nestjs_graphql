import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      createdAt: new Date(),
    },
    {
      id: '2',
      name: 'Jane Doe',
      email: 'jane@example.com',
      password: 'password456',
      createdAt: new Date(),
    },
  ];

  findAll() {
    return Promise.resolve(this.users);
  }
}
