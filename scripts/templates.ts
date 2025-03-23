export type Template  = {
  name: string;
  template: string;
}

export const templates: Template[] = [

  {
    name: "helloWorld",
    template: "export default function helloWorld(): string {\n  \n}\n",
  },

  {
    name: "binarySearch",
    template: "export default function binaraySearch(numberArray:number[],n: number): number {\n  \n}\n",
  },

  {
    name:"findSum",
    template: "export default function findSum(value:number): number {\n  \n}\n"
  },

  {
    name:"bubbleSort",
    template: "export default function bubbleSort(numberArray: number[]): number[] {\n  \n}\n"
  }
];
