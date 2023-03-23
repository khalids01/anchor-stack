import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import images from "../../constants/images";
import { User } from "../../hooks/useUser";
import { users } from "../../services/userService";

const UsersList = () => {
  const per_page = 6;
  const [page, setPage] = useState(1);
  const { data, refetch, isLoading } = useQuery([`users-${page}`], () =>
    users({ page, per_page })
  );

  useEffect(() => {
    refetch();
  }, [page]);

  return (
    <section>
      <h1
        style={{ fontSize: 23, fontWeight: 600 }}
        className="text-dark mb-[42px]"
      >
        Users List
      </h1>
      <table className="table-auto w-full user-list-table">
        <thead>
          <tr>
            <th className="table-header">#ID</th>
            <th className="table-header text-start">USER</th>
            <th className="table-header text-start">Email</th>
            <th className="table-header">Options</th>
          </tr>
        </thead>
        <tbody>
          {
            // @ts-ignore
            !isLoading && data.data?.data
              ? // @ts-ignore
                data.data?.data?.map((user: User) => (
                  <tr key={user.id}>
                    <td className="table-item text-center">{user.id}</td>

                    <td className="table-item flex justify-start items-center pl-4">
                      <img
                        src={user.avatar}
                        alt={user.first_name}
                        className="object-cover h-[60px] w-[60px] rounded-[15px] mr-[20px]"
                      />
                      {user.last_name} {user.first_name}
                    </td>

                    <td className="table-item pl-4 pt-5">{user.email}</td>

                    <td className="flex justify-center table-item items-center flex items-center">
                      <div>
                        <button className="bg-transparent border-none ">
                          <img
                            src={`../../assets/${images.dots}`}
                            className="object-contain h-[24px] w-[24px]"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              : null
          }
        </tbody>
      </table>

      {isLoading ? (
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : null}

      <ul className="list-unstyled pt-[47px] pb-8 flex justify-start gap-x-2">
        <li>
          <button
            onClick={() => setPage(page - 1)}
            className="pagination-btn"
            disabled={page === 1}
          >
            <img
              src={`../../assets/${images.first}`}
              alt="First"
              className="h-[16px] w-[16px] object-contain"
            />
          </button>
        </li>
        {data?.data?.total_pages
          ? Array.from({ length: data?.data?.total_pages }).map((_, index) => (
              <li key={index}>
                <button
                  className={` pagination-btn ${
                    page === index + 1 ? "bg-primary text-white" : ""
                  }`}
                  onClick={() => setPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))
          : null}
        <li>
          <button
            onClick={() => setPage(page + 1)}
            className="pagination-btn"
            disabled={page === data?.data?.total_pages}
          >
            <img
              src={`../../assets/${images.last}`}
              alt="First"
              className="h-[16px] w-[16px] object-contain"
            />
          </button>
        </li>
      </ul>
    </section>
  );
};

export default UsersList;
