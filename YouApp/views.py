from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
from django.views.generic import View

from YouApp.models import Driver,Service
from YouApp.utils import render_to_pdf

from datetime import datetime
# Notification after speedometer counters 5000km

from .forms import AssignmentForm


def assignment_details(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        #  create a form instance and populate it with data
        form = AssignmentForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form._cleaned data as required
            # ...s
            # redirect to a new URL:
            return HttpResponseRedirect('/thanks')
    else:
        form = AssignmentForm()

    return render(request, 'home.html', {'form' : form})

def index(request):
    return render(request, 'index.html')

def next(request):
    return render(request, 'next.html')


class GeneratePdf(View):
    def get(self, request, *args, **kwargs):
        data = {
            'today' : "Today",
            'amount' : 39.99,
            'customer_name' : 'Cooper Mann',
            'order_id' : 1233434,
        }
        pdf = render_to_pdf('pdf/invoice.html', data)

        """
        if pdf:
            response = template.render(context)
            filename = "Invoice_%s.pdf" %("12341231")
            content = "inline; filename='%s'" %(filename)
            download = request.GET.get("download")
            if download:
                content="attachment;filename='%s'" %(filename)
            response['Content-Disposition'] = content
            return response
        """
        return HttpResponse(pdf, content_type='application/pdf')


def generatePDF_view(request, *args, **kwargs):

    drivers = Driver.objects.all()

    data = {
        "drivers" : drivers,
    }
    pdf = render_to_pdf('pdf/drivers.html', data)

    """
    if pdf:
        response = template.render(context)
        filename = "Invoice_%s.pdf" %("12341231")
        content = "inline; filename='%s'" %(filename)
        download = request.GET.get("download")
        if download:
            content="attachment;filename='%s'" %(filename)
        response['Content-Disposition'] = content
        return response
    """

    return HttpResponse(pdf, content_type='application/pdf')

def serviceReport(request,year, month, *args, **kwargs):
    service = Service.objects.filter(published_on__year=year).filter(published_on__month=month)
    context = {
        "service" : service,
    }

    pdf = render_to_pdf('pdf/service.html', context)
    return HttpResponse(pdf, content_type="application/pdf")
