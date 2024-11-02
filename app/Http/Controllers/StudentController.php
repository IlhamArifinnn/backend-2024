<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $student = Student::all();

        $data = [
            'message' => 'Get all student',
            'data' => $student
        ];

        return response()->json($data, 200);
    }

    public function show(Student $id)
    {
        $student = Student::find($id);

        if ($student) {
            $data = [
                'message' => 'Get details of student',
                'data' => $student,
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Student not found',
                'data' => null,
            ];

            return response()->json($data, 404);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ];

        $student = Student::create($input);

        $data = [
            'message' => 'Get is created succesfully',
            'data' => $student,
        ];

        return response()->json($data, 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $id)
    {
        $student = Student::find($id);

        if ($student) {
            $input = [
                'nama' => $request->nama ?? $student->nama,
                'nim' => $request->nim ?? $student->nim,
                'email' => $request->email ?? $student->email,
                'jurusan' => $request->jurusan ?? $student->jurusan,
            ];

            $student->update($input);

            $data = [
                'message' => 'student is updated succesfully',
                'data' => $student,
            ];
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Student not found',
                'data' => null,
            ];

            return response()->json($data, 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $id)
    {
        $student = Student::find($id);

        if ($student) {
            $student->delete();

            $data = [
                'message' => 'student is deleted succesfully',
                'data' => null,
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Student not found',
                'data' => null,
            ];

            return response()->json($data, 404);
        }
    }
}
