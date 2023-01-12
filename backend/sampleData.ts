interface Project {
  id: number;
  clientId: number;
  name: string;
  description: string;
  status: string;
}

export const projects: Project[] = [
  {
    id: 1,
    clientId: 1,
    name: 'eCommerce Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non suscipit qui iste unde architecto tempora amet saepe quae maiores quaerat aperiam debitis ipsam, quos nulla deserunt molestias? Earum ex harum consectetur veritatis nesciunt officia vero velit ad ratione porro. Provident dolorem rem quo officiis deserunt omnis? Quas laboriosam, rerum similique sunt quos dolores sint incidunt architecto libero, perferendis quam excepturi!',
    status: 'In Progress',
  },
  {
    id: 2,
    clientId: 2,
    name: 'Dating App',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non suscipit qui iste unde architecto tempora amet saepe quae maiores quaerat aperiam debitis ipsam, quos nulla deserunt molestias? Earum ex harum consectetur veritatis nesciunt officia vero velit ad ratione porro. Provident dolorem rem quo officiis deserunt omnis? Quas laboriosam, rerum similique sunt quos dolores sint incidunt architecto libero, perferendis quam excepturi!',
    status: 'In Progress',
  },
  {
    id: 3,
    clientId: 3,
    name: 'Social Media App',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non suscipit qui iste unde architecto tempora amet saepe quae maiores quaerat aperiam debitis ipsam, quos nulla deserunt molestias? Earum ex harum consectetur veritatis nesciunt officia vero velit ad ratione porro. Provident dolorem rem quo officiis deserunt omnis? Quas laboriosam, rerum similique sunt quos dolores sint incidunt architecto libero, perferendis quam excepturi!',
    status: 'In Progress',
  },
  {
    id: 4,
    clientId: 4,
    name: 'Social Media App',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non suscipit qui iste unde architecto tempora amet saepe quae maiores quaerat aperiam debitis ipsam, quos nulla deserunt molestias? Earum ex harum consectetur veritatis nesciunt officia vero velit ad ratione porro. Provident dolorem rem quo officiis deserunt omnis? Quas laboriosam, rerum similique sunt quos dolores sint incidunt architecto libero, perferendis quam excepturi!',
    status: 'In Progress',
  },
  {
    id: 5,
    clientId: 5,
    name: 'Auction Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non suscipit qui iste unde architecto tempora amet saepe quae maiores quaerat aperiam debitis ipsam, quos nulla deserunt molestias? Earum ex harum consectetur veritatis nesciunt officia vero velit ad ratione porro. Provident dolorem rem quo officiis deserunt omnis? Quas laboriosam, rerum similique sunt quos dolores sint incidunt architecto libero, perferendis quam excepturi!',
    status: 'In Progress',
  },
];

// Clients
interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export const clients: Client[] = [
  {
    id: 1,
    name: 'Tony Stark',
    email: 'ironman@gmail.com',
    phone: '343-567-4333',
  },
  {
    id: 2,
    name: 'Steve Rogers',
    email: 'captainman@gmail.com',
    phone: '443-447-4683',
  },
  {
    id: 3,
    name: 'Bruce Banner',
    email: 'batman@gmail.com',
    phone: '889-483-0022',
  },
  {
    id: 4,
    name: 'Peter Parker',
    email: 'spiderman@gmail.com',
    phone: '829-292-9292',
  },
  {
    id: 5,
    name: 'Thor Odinson',
    email: 'thor@gmail.com',
    phone: '763-333-0100',
  },
];
