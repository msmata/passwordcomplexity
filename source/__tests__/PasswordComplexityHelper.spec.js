const { calculateComplexity, PasswordComplexityValues } = require('../PasswordComplexityHelper');

describe('Password complexity calculation', () => {
    it('Should return WEAK password', () => {
        const complexity = calculateComplexity('fafa');
        expect(complexity).toEqual(PasswordComplexityValues.WEAK);
    });
    it('Should return GOOD password', () => {
        const complexity = calculateComplexity('belen1234');
        expect(complexity).toEqual(PasswordComplexityValues.GOOD);
    });
    it('Should return EXCELLENT password', () => {
        const complexity = calculateComplexity('lol123');
        expect(complexity).toEqual(PasswordComplexityValues.EXCELLENT);
    });
});