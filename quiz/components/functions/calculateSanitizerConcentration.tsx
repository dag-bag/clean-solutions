export default function calculateSanitizerConcentration(originalConcentration: number, originalVolume: number, targetVolume: number) {
    // Convert original volume to milliliters
    const mlPerGallon = 3785.41;
    const originalVolumeMl = originalVolume * mlPerGallon;

    // Calculate target concentration
    const targetVolumeMl = targetVolume;
    const targetConcentration = (originalConcentration / originalVolumeMl) * targetVolumeMl;

    // Round to two decimal places
    return parseFloat(targetConcentration.toFixed(2));
}