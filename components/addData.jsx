import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { FormLabel, Input, FormControl, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const AddNewData = ({ addData }) => {
  //Page routing
  const router = useRouter();

  //Submit button throttling
  const [loading, setLoading] = useState(false);

  //Form and validation
  const formik = useFormik({
    initialValues: {
      id: "",
      userId: "",
      title: "",
      body: "",
    },

    validationSchema: Yup.object({
      id: Yup.string().required("Required"),
      userId: Yup.string().required("Required"),
      title: Yup.string().required("Required"),
      body: Yup.string().required("Required"),
    }),

    onSubmit: async (values) => {
      try {
        setLoading(true);
        addData(values);
        router.push(`/detailData/${values.id}`);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="w-[240px] md:w-[600px] lg:w-[1000px] mx-auto">
      {/* Form add new data*/}
      <form onSubmit={formik.handleSubmit}>
        <FormControl>
          <FormLabel>ID</FormLabel>
          <Input
            type="text"
            placeholder="id"
            name="id"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.id}
          />
          {formik.touched.id && formik.errors.id ? (
            <p className="text-sm text-red-500">{formik.errors.id}</p>
          ) : null}
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>User ID</FormLabel>
          <Input
            type="text"
            placeholder="User ID"
            name="userId"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userId}
          />
          {formik.touched.userId && formik.errors.userId ? (
            <p className="text-sm text-red-500">{formik.errors.userId}</p>
          ) : null}
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            placeholder="Title"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <p className="text-sm text-red-500">{formik.errors.title}</p>
          ) : null}
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Body</FormLabel>
          <Input
            type="text"
            placeholder="Body"
            name="body"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.body}
          />
          {formik.touched.body && formik.errors.body ? (
            <p className="text-sm text-red-500">{formik.errors.body}</p>
          ) : null}
        </FormControl>
        <div className="flex justify-center">
          <Button
            isLoading={loading}
            loadingText="Submitting"
            type="submit"
            colorScheme="blue"
            mt={5}
          >
            Submit
          </Button>
          <Link href="/">
            <Button ml={5} mt={5}>
              Home
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddNewData;
