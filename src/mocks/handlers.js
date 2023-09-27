import { rest } from "msw"

const baseURL = "https://comp-spanish-api-35f1e1574e0f.herokuapp.com/"

export const handlers =[
    rest.get(`${baseURL}dj-rest-auth/user/`, (req,res,ctx) => {
        return res(
            ctx.json({
                "id": 1,
                "owner": "admin",
                "created_at": "15 Sep 2023",
                "updated_at": "15 Sep 2023",
                "name": "",
                "image": "https://res.cloudinary.com/dlnmcty8k/image/upload/v1/media/../default_profile_nhnsof",
                "is_owner": false,
                "resources_count": 0
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];