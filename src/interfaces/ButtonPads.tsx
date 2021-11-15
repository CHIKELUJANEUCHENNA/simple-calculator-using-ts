export default interface IButton{
    value: string;
    clickHandler: (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

}

export interface IClearHandler {
    value: string;
    clearFunction: () => void;
}