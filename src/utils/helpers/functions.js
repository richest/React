export function remomveHTMLTags(_params){
    // xyz logic
    filteredString = '';
    return filteredString;
}


export function formatOrderDate(createdDate) {
    const _date = new Date(createdDate);
    return _date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    });
}

export function commaSeparated(_param) {
    return _param.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function validateEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

// etc
  