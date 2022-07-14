import { compare } from 'bcryptjs';

const authPassword = async (text: string, hash: string) => {
  const verify = await compare(text, hash);
  return verify;
};

export default authPassword;
