import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Hash a password for seeding
  const passwordHash = await bcrypt.hash('password123', 10);

  // Create Users
  const user1 = await prisma.user.create({
    data: {
      user_name: 'johndoe',
      email: 'johndoe@example.com',
      password: passwordHash,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      user_name: 'janedoe',
      email: 'janedoe@example.com',
      password: passwordHash,
    },
  });

  // Create Clients
  const client1 = await prisma.client.create({
    data: {
      first_name: 'John',
      last_name: 'Doe',
      email: 'client1@example.com',
      photo: 'photo_link',
      adresse: '123 Street, City',
      numero: '1234567890',
      User: { connect: { id: user1.id } },
    },
  });

  const client2 = await prisma.client.create({
    data: {
      first_name: 'Jane',
      last_name: 'Doe',
      email: 'client2@example.com',
      photo: 'photo_link',
      adresse: '456 Avenue, City',
      numero: '0987654321',
      User: { connect: { id: user2.id } },
    },
  });

  // Create Employees
  const employee1 = await prisma.employee.create({
    data: {
      first_name: 'Jim',
      last_name: 'Beam',
      adresse: '789 Road, City',
      numero: '1112223333',
      photo: 'photo_link',
      email: 'employee1@example.com',
      role: 'technicien',
      User: { connect: { id: user1.id } },
    },
  });

  const employee2 = await prisma.employee.create({
    data: {
      first_name: 'Jack',
      last_name: 'Daniels',
      adresse: '101 Blvd, City',
      numero: '4445556666',
      photo: 'photo_link',
      email: 'employee2@example.com',
      role: 'admin',
      User: { connect: { id: user2.id } },
    },
  });

  // Create Tickets
  const ticket1 = await prisma.ticket.create({
    data: {
      modele: 'Model X',
      num_serie: 'SN123456',
      garantie: 'valider',
      statut: 'ok',
      type: 'Repair',
      commentaire: 'Issue with the motherboard.',
      Client: { connect: { id: client1.id } },
    },
  });

  // Create Factures
  const facture1 = await prisma.facture.create({
    data: {
      statut: 'cheque',
      montant: 100.50,
      Client: { connect: { id: client1.id } },
    },
  });

  // Create Rapports
  const rapport1 = await prisma.rapport.create({
    data: {
      contenu: 'Replaced the motherboard and tested.',
      Ticket: { connect: { id: ticket1.id } },
    },
  });

  console.log('Seed data created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
