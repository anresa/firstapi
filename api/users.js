import connectToMongodb from "./_database/connect-to-mongodb";
import User from "./_database/models/User";

const handler = async (request, response) => {
  await connectToMongodb();
  const users = await User.find({});
  return response.json(users);
};
export default handler;
