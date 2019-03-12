package com.theme;

import java.util.ArrayList;
import java.util.List;

public class Histogram {

    private class HistogramNode {
        public String theme;
        public int numQuotes;
        public HistogramNode(String t, int n) {
            this.theme = t;
            this.numQuotes = n;
        }
    }

    public List<HistogramNode> histogramList = new ArrayList<>();

    public void add(String t, int n) {
        this.histogramList.add(new HistogramNode(t, n));
    }

    public List<HistogramNode> getHistogramList() {
        return this.histogramList;
    }

}