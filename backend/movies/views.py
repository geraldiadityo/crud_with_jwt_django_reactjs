from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Movie
from .serializers import MovieSerializer
# Create your views here.

@api_view(['GET','POST'])
def movie_list(request):
    if request.method == 'GET':
        data = Movie.objects.all()
        serializer = MovieSerializer(data, context = {'request':request}, many = True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = MovieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT','DELETE','GET'])
def movie_detail(request, pk):
    try:
        movie = Movie.objects.get(pk=pk)
    except Movie.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PUT':
        serializer = MovieSerializer(movie, data=request.data, context = {'request':request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        movie.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    elif request.method == 'GET':
        serializer = MovieSerializer(movie,context = {'request':request})
        return Response(serializer.data)
