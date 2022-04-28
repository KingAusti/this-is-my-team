//add everything just modify school
const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Can Instantiate an Intern', () => {
        it('Can properly be instantiated', () => {
            const Austin = new Intern()
            expect(typeof(Austin)).toBe("object")
        })
    })

    describe('Can set constructor properties', () => {
        it('Can set the school', () => {
            const school = 'Hillcrest Academy';
            const newIntern = new Intern('Austin', 1, 'robloxmaster06@comcast.net', school)
            expect(newIntern.school).toBe(school);
        })
        
    })

    describe('Can use methods', () => {
        it('Can get school property using getSchool()', () => {
            const school = 'Hillcrest Academy';
            const newIntern = new Intern('Austin', 1, 'robloxmaster06@comcast.net', school)
            expect(newIntern.getSchool()).toBe(school);
        })

        it('Returns Intern when using getRole()', () => {
            const role = 'Intern'
            const newIntern = new Intern('Austin', 1, 'robloxmaster06@comcast.net', 'Hillcrest Academy')
            expect(newIntern.getRole()).toBe(role)
        })
    })
});