enum Role {Doctor,Nurse,Admin}

interface Staff {
  id: number;
  name: string;
  role: Role;
}

const staffMembers: Staff[] = [
  { id: 1, name: "Dr. Smith", role: Role.Doctor },
  { id: 2, name: "Nurse Joy", role: Role.Nurse },
  { id: 3, name: "John Doe", role: Role.Admin }
];

function printStaffSummary(staffList: Staff[]): void {
  staffList.forEach(member => {
    console.log(`Name: ${member.name}, Role: ${Role[member.role]}`);
  });
}

printStaffSummary(staffMembers);
