const PasswordComplexityValues = {
    WEAK: 'weak',
    GOOD: 'good',
    EXCELLENT: 'excellent',
}

const calculateComplexity = password => {
    return PasswordComplexityValues.GOOD;
}

module.exports = {calculateComplexity, PasswordComplexityValues};