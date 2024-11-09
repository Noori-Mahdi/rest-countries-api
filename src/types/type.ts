export interface ThemeType {
    theme: 'dark' | 'light';
}

export interface ThemeContextType extends ThemeType{
  toggleTheme: () => void;
}

export interface SearchBoxProps extends ThemeType {

}

export interface ButtonPropsType{
    useImage: boolean,
    text: string,
    onClick?: ()=>void,
}

export interface MainMenuProps{
    title : string;
}

export type Languages = Record<string, string>

export type Currency = Record<string, { name: string; symbol: string }>;

export interface DetailPropsType{
    id:string,
    name:{common:string},
    altSpellings:string[],
    population:string,
    region:string,
    subregion:string,
    capital:string[],
    tld:string[],
    currencies: Currency,
    languages:Languages,
    borders:string[],
    flags:{png:string,svg:string},
}

export interface CountryPropsType {
    name:{common:string,official:string},
    region:string,
    population:string,
    capital:string[],
    flags:{png:string,svg:string},
    countryName:string,
}

export interface CountryCardPropsType {
    id:string,
    countryName:string,
    population:string,
    region:string,
    capital:string | null,
    flags:string | null,
}

export interface SelectBoxPropsType{
    onSelect : (e:string) => void,
    options: string[],
    defaultValue: string | '',
}

export interface SearchBoxPorpsType{
    onSearch: (e:string) => void,
}

export interface CountryListPropsType{
    data:CountryPropsType[]
}