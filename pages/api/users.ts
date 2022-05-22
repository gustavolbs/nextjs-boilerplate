// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import faker from "@faker-js/faker";
import type { NextApiRequest, NextApiResponse } from "next";

import { IUser } from "../../interfaces/user";

type Data = {
  users: IUser[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const users = [
    {
      name: faker.name.findName(),
      age: faker.datatype.number({ min: 10, max: 100 }),
    },
    {
      name: faker.name.findName(),
      age: faker.datatype.number({ min: 10, max: 100 }),
    },
  ];

  res.status(200).json({ users });
}
