//add everything and modify office number
const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Can Instantiate an Manager', () => {
        it('Can properly be instantiated', () => {
            const Glenda = new Manager()
            expect(typeof(Glenda)).toBe("object")
        })
    })

    describe('Can set constructor properties', () => {
        it('Can set the office number', () => {
            const officeNumber = 6969;
            const newManager = new Manager('Glenda', 1, 'glendathegoodwitch@sbcglobal.net', officeNumber)
            expect(newManager.officeNumber).toBe(officeNumber);
        })
        
    })

    describe('Can use methods', () => {
        it('Can get school property using getSchool()', () => {
            const officeNumber = 6969;
            const newManager = new Manager('Glenda', 1, 'glendathegoodwitch@sbcglobal.net', officeNumber)
            expect(newManager.getOfficeNumber()).toBe(officeNumber);
        })

        it('Returns Manager when using getRole()', () => {
            const role = 'Manager'
            const newManager = new Manager('Glenda', 1, 'glendathegoodwitch@sbcglobal.net', 6969)
            expect(newManager.getRole()).toBe(role)
        })
    })
});