<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>Lookify | Search</title>
        <link rel="stylesheet" href="/webjars/bootstrap/5.0.0-beta1/css/bootstrap.min.css" />
    </head>

    <body>
        <div class="container text-center mt-4">
            <nav class="d-flex justify-content-between">
                <span>
                    Songs by artist: <c:out value="${artist}" />
                </span>
                <form class="d-inline" action="/search">
                    <input type="text" name="artist"/>
                    <button class="btn btn-secondary">New Search</button>
                </form>
                <a class="btn btn-dark mb-2 float-right" href="/dashboard">Dashboard</a>
            </nav>
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    <c:forEach items="${songs}" var="song">
                        <tr>
                            <td>
                                <a href="/songs/${song.id}"><c:out value="${song.name}" /></a> 
                            </td>
                            <td>
                                <c:out value="${song.rating}" />
                            </td>
                            <td >
                                <form action="/songs/${song.id}/delete" method="post">
                                    <input type="hidden" name="_method" value="delete">
                                    <input class="btn btn-danger" type="submit" value="Delete">
                                </form>
                            </td>
                        </tr>
                    </c:forEach>

                </tbody>
            </table>
        </div>
    </body>

    </html>