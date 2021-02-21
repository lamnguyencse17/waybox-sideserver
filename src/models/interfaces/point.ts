interface Point {
	type: string;
	coordinates: number[];
	second?: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export default interface IArrayOfPoints extends Array<Point> {}
