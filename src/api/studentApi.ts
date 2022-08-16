import { Student, ListResponse, ListParams } from 'models';
import axiosClient from './axiosClient';

const studentApi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    const url = 'admin/students';
    return axiosClient.get(url, { params });
  },
  create(data: Student): Promise<Student> {
    const url = 'admin/students';
    return axiosClient.post(url, { data });
  },
  update(data: Student): Promise<Student> {
    const url = 'admin/students';
    return axiosClient.put(url, { data });
  },
  getStudentById(id: string): Promise<Student> {
    const url = `admin/students/${id}`;
    return axiosClient.get(url);
  },
  delete(id: string): Promise<any> {
    const url = `admin/students/${id}`;
    return axiosClient.delete(url);
  },
};
export default studentApi;
