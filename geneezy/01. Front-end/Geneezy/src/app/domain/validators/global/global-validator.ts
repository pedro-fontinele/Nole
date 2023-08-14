export abstract class GlobalValidator{
    public static clearCharacters(characters: any): any{
        return characters.toString().replace(/[^\w]/g, '');
    }
}