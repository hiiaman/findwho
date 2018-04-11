<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


class LoginController extends Controller
{
    /**
     * @param LoginRequest $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function generalToken(LoginRequest $request)
    {
        $auth = Auth::attempt(
            [
                'email' => $request->get('username'),
                'password' => $request->get('password')
            ],1);

        if($auth) {
            $user = User::where('email', $request->get('username'))->first();
            $token = $user->createToken('findWho')->accessToken;
        } else {
            $errors = [
                'username' => [
                    "User name is incorrect"
                ],
                'password' => [
                    "Password is incorrect"
                ]
            ];

            return response(json_encode(['errors' => $errors]), 400);
        }

        return response(json_encode(['access_token' => $token]), 200);
    }

}
