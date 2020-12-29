import { apiCallGet } from "../../../../api/requests";

export default async function handler(req, res) {
  try {
    const {
      query: { name },
    } = req;
    const url = "https://pokeapi.co/api/v2/pokemon";
    const uri = `${url}/${name}`;
    const result = await apiCallGet(uri);
    res.json({
      info: result.data,
    });
  } catch (e) {
    res.statusCode = 400;
    res.json({
      message: 'Not found',
      info: e.response.data,
    });
  }
}
