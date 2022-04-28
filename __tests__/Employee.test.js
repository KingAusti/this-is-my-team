const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Can Instantiate an Employee', () => {
        it('Can properly be instantiated', () => {
            const Austin = new Employee()
            expect(typeof(Austin)).toBe("object")
        })
    })

    describe('Can set constructor properties', () => {
        it('Can set the name', () => {
            const name = 'Austin';
            const newEmployee = new Employee(name)
            expect(newEmployee.name).toBe(name);
        })

        it('Can set the ID', () => {
            const testID = 1;
            const newEmployee = new Employee('Austin', testID)
            expect(newEmployee.id).toBe(testID)
        })

        it('Can set the Email', () => {
            const email = 'donaldlovespat1947@earthlink.net';
            const newEmployee = new Employee('Austin', 1, email)
            expect(newEmployee.email).toBe(email)
        })
    })

    describe('Can use methods', () => {
        it('Can get name property using getName()', () => {
            const name = 'Austin';
            const newEmployee = new Employee(name);
            expect(newEmployee.getName()).toBe(name);
        })

        it('Can get ID property using getId()', () => {
            const testID = 1;
            const newEmployee = new Employee('Austin', testID)
            expect(newEmployee.getId()).toBe(testID)
        })

        it('Can get Email property using getEmail()', () => {
            const email = 'donaldlovespat1947@earthlink.net';
            const newEmployee = new Employee('Austin', 1, email)
            expect(newEmployee.getEmail()).toBe(email)
        })

        it('Returns Employee when using getRole()', () => {
            const role = 'Employee'
            const newEmployee = new Employee('Austin', 1, 'donaldlovespat1947@earthlink.net')
            expect(newEmployee.getRole()).toBe(role)
        })
    })
});