const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Can Instantiate an Engineer', () => {
        it('Can properly be instantiated', () => {
            const Austin = new Engineer()
            expect(typeof(Austin)).toBe("object")
        })
    })

    describe('Can set constructor properties', () => {
        it('Can set the GitHub', () => {
            const gitName = 'AcePilotDonald';
            const newEngineer = new Engineer('Austin', 1, 'donaldlovespat1947@earthlink.net', gitName)
            expect(newEngineer.github).toBe(gitName);
        })
        
    })

    describe('Can use methods', () => {
        it('Can get gitHub property using getGitHub()', () => {
            const gitName = 'AcePilotDonald';
            const newEngineer = new Engineer('Austin', 1, 'donaldlovespat1947@earthlink.net', gitName)
            expect(newEngineer.getGithub()).toBe(gitName);
        })

        it('Returns Engineer when using getRole()', () => {
            const role = 'Engineer'
            const newEngineer = new Engineer('Austin', 1, 'donaldlovespat1947@earthlink.net', 'AcePilotDonald')
            expect(newEngineer.getRole()).toBe(role)
        })
    })
});