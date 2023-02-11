const converters = {
    // convert gallons to ppm
    'gallonsToPpm': (i: number) => (i * 3.78541) * 1000000,
    'quartsToPpm': (i: number) => (i * 0.946353) * 1000000,
    'mlToPpm': (i: number) => i * 1000000,
}


export default converters