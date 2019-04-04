package com.theme;

import java.util.ArrayList;
import java.util.List;

public class Histogram {

    private class HistogramNode {

        public String name;
        public int numQuotes;
        public Serie[] series = new Serie[1];

        private class Serie {

            public String name = "Citas";
            public int value;

            public Serie(int n) {
                this.value = n;
            }
        }

        public HistogramNode(String theme, int n) {
            this.name = theme;
            this.numQuotes = n;
            this.series[0] = new Serie(n);
        }
        
    }

    public List<HistogramNode> histogram = new ArrayList<>();

    public void add(String t, int n) {
        this.histogram.add(new HistogramNode(t, n));
    }

    public List<HistogramNode> getHistogramList() {
        return this.histogram;
    }

}