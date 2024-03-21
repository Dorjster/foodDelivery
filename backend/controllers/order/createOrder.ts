export const CreateOrderController = async (req: Request, res: Response) => {
  try {
    const result = await CreateOrderQuery(req);
    res.status(200).send(result);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
