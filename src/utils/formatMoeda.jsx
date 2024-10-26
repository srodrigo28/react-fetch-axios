const formatMoeda = ( moeda ) => {
    return moeda.toLocaleString(
        'pt-br',
        {
            style: 'currency',
            currency: 'BRL'
        });
};

export default formatMoeda;