<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Closure;
use Lcobucci\JWT\Parser;
use League\OAuth2\Server\Exception\OAuthServerException;

class VerifyToken
{
    /**
     * @var \League\OAuth2\Server\CryptKey
     */
    protected $publicKey;

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
//        if ($request->hasHeader('authorization') !== false) {
//            $header = $request->header('Authorization');
//            $jwt = trim(preg_replace('/^(?:\s+)?Bearer\s/', '', $header));
//            $token = (new Parser())->parse($jwt);
////            dd(Carbon::createFromTimestampUTC($token->getClaims()["exp"]));
////            throw OAuth   ServerException::accessDenied('Missing "Authorization" header');
//        }
//
//        try {
//            // Attempt to parse and validate the JWT
//
//        } catch (\Exception $exception) {
//
//        }

        return $next($request);
    }
}
