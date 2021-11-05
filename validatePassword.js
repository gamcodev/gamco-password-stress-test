exports.errors = {
    atLeastTwelveCharacters: "Password must have at least twelve characters",
    atLeastOneDigit: "Password must have at least one digit/number character (0-9)",
    mixedCases: "Password must have mixed cases (both upper- and lowercase characters)",
    specialCharacter: "Special character (@#$%&) recommended but not required",
    noCarats: "Carats (<>) not permitted",
};

exports.validate = password => ( {
    atLeastTwelveCharacters: !!password.match( /.{12,}/ ),
    atLeastOneDigit: !!password.match( /(?=.*\d).*/ ),
    mixedCases: !!password.match( /(?=.*[A-Z])(?=.*[a-z]).*/ ),
    specialCharacter: !!password.match( /(?=.*[!@#$%&*]).*/ ),
    noCarats: !!password.match( /(?!.*[<>]).*/ ),
    validPassword: !!password.match( /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?!.*[<>]).{12,}/ )
} );
