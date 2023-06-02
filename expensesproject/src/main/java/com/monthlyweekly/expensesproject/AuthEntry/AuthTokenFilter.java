package com.monthlyweekly.expensesproject.AuthEntry;

/*

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AuthTokenFilter extends BasicAuthenticationFilter {

    public AuthTokenFilter(AuthenticationManager authenticationManager) {
        super(authenticationManager);
    }


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        // Get token from request header
        String token = request.getHeader("Authorization");

        // If the token is not null and it is valid, get the authentication object and set it in the SecurityContext
        if (token != null) {
            Authentication authentication = getAuthentication(token);
            if (authentication != null) {
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        }

        chain.doFilter(request, response);
    }

    // Method to get authentication object from token
    private Authentication getAuthentication(String token) {
        // Validate token and get username (or other user details) from it
        // This depends on how your tokens are structured

        // Return an authentication object
        // You will have to implement this depending on your token structure
        return null;
    }
}
*/